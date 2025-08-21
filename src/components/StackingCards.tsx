
import React, { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";

interface CardData {
  id: number;
  title: string;
  content: string;
  color?: string;
}

interface StackingCardsProps {
  cards: CardData[];
  className?: string;
}

const StackingCards: React.FC<StackingCardsProps> = ({ cards, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(-1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up Intersection Observer for each card
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const cardElements = cardRefs.current;

    cardElements.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && scrollPosition > 0) {
              setActiveCardIndex(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [scrollPosition]);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const currentScrollPos = containerRef.current.scrollTop;
        
        // Determine if we're scrolling down or up
        if (currentScrollPos > scrollPosition) {
          // Scrolling down - reveal cards
          const nextIndex = Math.min(
            Math.floor(currentScrollPos / 200),
            cards.length - 1
          );
          setActiveCardIndex(nextIndex);
        } else {
          // Scrolling up - hide cards
          const prevIndex = Math.max(
            Math.floor(currentScrollPos / 200),
            -1
          );
          setActiveCardIndex(prevIndex);
        }
        
        setScrollPosition(currentScrollPos);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollPosition, cards.length]);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "relative h-[70vh] overflow-y-auto overflow-x-hidden scrollbar-hide",
        className
      )}
    >
      <div className="relative min-h-[200vh] px-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="sticky top-1/2 -translate-y-1/2 p-4 mb-[80vh]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: index <= activeCardIndex ? 1 : 0,
              y: index <= activeCardIndex ? 0 : 50,
              zIndex: cards.length - index
            }}
            transition={{ duration: 0.5 }}
          >
            <Card 
              className={cn(
                "p-6 transform transition-all duration-500",
                index <= activeCardIndex ? "scale-100" : "scale-95",
                card.color || "bg-white"
              )}
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transform: `
                  scale(${index <= activeCardIndex ? 1 : 0.95}) 
                  translateY(${
                    index < activeCardIndex ? (activeCardIndex - index) * -15 : 0
                  }px)
                `
              }}
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackingCards;
