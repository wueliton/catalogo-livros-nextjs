"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { FC } from "react";

export const Menu: FC = () => {
    const pathName = usePathname();
    
    return <nav className="navbar navbar-expand-sm navbar-dark sticky-top bg-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              href="/"
              className={`nav-link ${pathName === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/catalogo"
              className={`nav-link ${pathName === '/catalogo' ? 'active' : ''}`}
            >
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/novo"
              className={`nav-link ${pathName === '/novo' ? 'active' : ''}`}
            >
              Novo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}