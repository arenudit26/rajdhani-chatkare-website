import React from 'react';
import { Flame, Zap, DollarSign } from 'lucide-react';
import './Menu.css';

import butterChicken from '../assets/butter_chicken_1777805057374.png';
import chilliChicken from '../assets/chilli_chicken_1777805072904.png';
import chocolateShake from '../assets/chocolate_shake_1777805105417.png';
import dahipuri from '../assets/Dahi-Puri_-2-1.jpg';
import chickentikka from '../assets/img-20201120-wa0011-500x500-1.jpg';
import chickenKorma from '../assets/1200-by-1200-images.jpg';
import masalaDosa from '../assets/4f6bfd9be7bb6caacefbc00b6f90986c.avif';


const menuItems = [
  {
    id: 1,
    name: 'Butter Chicken',
    price: '₹180',
    tag: 'Student Favorite',
    tagIcon: <Flame size={14} />,
    tagColor: 'orange',
    image: butterChicken,
  },
  {
    id: 2,
    name: 'Chilli Chicken + Fried Rice',
    price: '₹160',
    tag: 'Quick Serve',
    tagIcon: <Zap size={14} />,
    tagColor: 'yellow',
    image: chilliChicken,
  },
  {
    id: 3,
    name: 'Chocolate Shake',
    price: '₹80',
    tag: 'Budget Pick',
    tagIcon: <DollarSign size={14} />,
    tagColor: 'green',
    image: chocolateShake,
  },
  {
    id: 4,
    name: 'Chicken Korma',
    price: '₹170',
    tag: '',
    image: chickenKorma, // fallback to butter chicken image
  },
  {
    id: 5,
    name: 'Chicken Tikka / Malai Tikka',
    price: '₹150',
    tag: 'Student Favorite',
    tagIcon: <Flame size={14} />,
    tagColor: 'orange',
    image: chickentikka, // fallback image
  },
  {
    id: 6,
    name: 'Dahi Batata Puri',
    price: '₹60',
    tag: 'Quick Serve',
    tagIcon: <Zap size={14} />,
    tagColor: 'yellow',
    image: dahipuri, // fallback
  },
  {
    id: 7,
    name: 'Masala Dosa',
    price: '₹90',
    tag: 'Budget Pick',
    tagIcon: <DollarSign size={14} />,
    tagColor: 'green',
    image: masalaDosa, // fallback
  }
];

const Menu = () => {
  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Campus Favorites</h2>
          <p className="section-subtitle">
            From comforting North Indian curries to quick Chinese bites and refreshing shakes.
          </p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card glass-card">
              <div className="menu-image-container">
                <img src={item.image} alt={item.name} className="menu-image" />
                {item.tag && (
                  <div className={`menu-tag tag-${item.tagColor}`}>
                    {item.tagIcon} {item.tag}
                  </div>
                )}
              </div>
              <div className="menu-details">
                <h3 className="menu-name">{item.name}</h3>
                <div className="menu-bottom">
                  <span className="menu-price">{item.price}</span>
                  <button className="add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline">View Full Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
