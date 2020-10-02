import React from 'react'

import '../styles/index.css'

export default function index() {
    return (
        <main>
            <section className="hero">
                <header>
                    <nav>
                        <ul className="main-nav">
                            <li><a href="#">NOSOTROS</a></li>
                            <li><a href="#">PROYECTOS</a></li>
                            <li><a href="#">REDES SOCIALES</a></li>
                            <li><a href="#">CONTACTO</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="hero-main">
                    <img src="/images/logo.png" alt="Logo Click2point"/>
                </div>
            </section>
            <section className="about">
                <h1>NOSOTROS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quam id dolore minus, officiis alias libero, saepe laudantium, ad corporis praesentium. Quo culpa rem ipsa reiciendis, ut cumque sunt harum?</p>
            </section>
        </main>
    )
}
