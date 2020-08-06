import React from 'react'
import PortafolioCard from '../components/PortafolioCard'

import '../styles/index.css'

export default function index() {
    return (
        <main>
            <section className="hero section">
                <div className="container">
                    <h1>Click2point</h1>
                    <p>Poner algo asi bien bonito e inspirador para que llame la atención. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat, aliquam, obcaecati itaque dolores non praesentium explicabo adipisci delectus ullam quos dolorum porro odio ab quisquam, vero culpa maiores asperiores?</p>
                </div>
            </section>

            <section className="">
                <div class="parallax"> 
                    <div className="parallax-container">
                        <h1>Somos una agencia de diseño y desarrollo</h1>
                    </div>
                </div>
            </section>

            <section className="portafolio section">
                <div className="container">
                    <h1>Portafolio</h1>
                    <div className="portafolio-list">
                        <PortafolioCard/>
                        <PortafolioCard/>
                        <PortafolioCard/>
                    </div>
                </div>
            </section>

            <section className="contact section">
                <div className="container">
                    <h1>Contactanos</h1>
                    <div className="contact-list">
                        <div>
                            <h2>Escribenos:</h2>
                            <p>contacto@click2point.com</p>
                        </div>
                        <div>
                            <h2>Llamanos:</h2>
                            <p>55 55 55 55 55</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
