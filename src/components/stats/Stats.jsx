import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Users, Star, Building, Car } from 'lucide-react';
import './Stats.css';
const Stats = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    offices: 0,
    vehicles: 0,
    workers: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const statsData = useMemo(() => [
    {
      id: 'experience',
      icon: <Star color='var(--primary)' size={60} />,
      target: 15,
      label: 'سنوات من الخبرة',
      duration: 2000
    },
    {
      id: 'offices',
      icon: <Building color='var(--primary)' size={60} />,
      target: 12,
      label: 'محطة خدمة وإنقاذ',
      duration: 2000
    },
    {
      id: 'vehicles',
      icon: <Car color='var(--primary)' size={60} />,
      target: 8500,
      label: 'مهمة إنقاذ ناجحة',
      duration: 2500
    },
    {
      id: 'workers',
      icon: <Users color='var(--primary)' size={60} />,
      target: 45,
      label: 'خبير وسائق في فريقنا',
      duration: 2200
    }
  ], []);

  useEffect(() => {
    let timers = [];

    if (hasAnimated) {
      statsData.forEach((stat) => {
        const increment = stat.target / (stat.duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            setCounters((prev) => ({ ...prev, [stat.id]: stat.target }));
            clearInterval(timer);
          } else {
            setCounters((prev) => ({ ...prev, [stat.id]: Math.floor(current) }));
          }
        }, 16);
        timers.push(timer);
      });
    }

    return () => timers.forEach(timer => clearInterval(timer));
  }, [hasAnimated, statsData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-overlay"></div>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="home-stat-number">
              {counters[stat.id].toLocaleString()}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

