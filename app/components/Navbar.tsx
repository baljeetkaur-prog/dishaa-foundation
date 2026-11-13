
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  {
    name: "For Individuals",
    children: [
      { name: "Individual Counselling", href: "/coming-soon" },
    ],
  },
  {
    name: "For Women",
    children: [
      { name: "Wellbeing & Personal Growth", href: "/coming-soon" },
    ],
  },
  {
    name: "For Professionals & Organisations",
    children: [
      { name: "Clinical & Professional Supervision", href: "/coming-soon" },
      { name: "Professional Training & Workshops", href: "/coming-soon" },
      { name: "Organisational Consultancy", href: "/coming-soon" },
       { name: "Field Education & Student Placements", href: "/coming-soon" }
    ],
  },
  { name: "Community", href: "/coming-soon" },
  { name: "Contact Us", href: "/contact-us" },
];


  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header">
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-container">
          <a href="tel:+61430500596" className="topbar-phone">
            <FaPhoneAlt />
            <span>+61 430 500 596</span>
          </a>

       <div className="topbar-email">
  <a
  href="mailto:contact@dishaafoundation.com.au"
  className="topbar-email"
>
  <FaEnvelope />
  <span>contact@dishaafoundation.com.au</span>
</a>
</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="navbar-logo" onClick={closeMenu}>
            <Image
              src="/images/new_logo.png"
              alt="Dishaa Foundation"
              width={220}
              height={80}
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {menuOpen && (
            <div className="sidebar-overlay" onClick={closeMenu} />
          )}

          {/* Navigation Links */}
          <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <div className="navbar-links">
              {navLinks.map((link) => {
               const dropdownIsActive =
  pathname !== "/coming-soon" &&
  link.children?.some((child) => pathname === child.href);

                const linkIsActive = link.href
                  ? pathname === link.href
                  : dropdownIsActive;

                return (
                  <div
                    className={`nav-item ${
                      link.children ? "has-dropdown" : ""
                    } ${linkIsActive ? "active" : ""}`}
                    key={link.name}
                  >
                    {link.children ? (
                      <>
                        <button
                          className={`nav-dropdown-toggle ${
                            dropdownIsActive ? "active-link" : ""
                          }`}
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.name ? null : link.name
                            )
                          }
                          aria-expanded={activeDropdown === link.name}
                        >
                          {link.name}
                          <FaChevronDown
                            className={
                              activeDropdown === link.name ? "rotated" : ""
                            }
                          />
                        </button>

                        <div
                          className={`dropdown-menu ${
                            activeDropdown === link.name ? "dropdown-active" : ""
                          }`}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={
                                pathname === child.href ? "active-child" : ""
                              }
                              aria-current={
                                pathname === child.href ? "page" : undefined
                              }
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href!}
                        className={linkIsActive ? "active-link" : ""}
                        aria-current={
                          linkIsActive ? "page" : undefined
                        }
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Appointment Button */}
       <Link
  href="/contact-us"
  className="appointment-btn"
  onClick={closeMenu}
>
              Make An Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
