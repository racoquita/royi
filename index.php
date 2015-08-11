<?php 

    require 'php/vendor/autoload.php';

    $builder = new Gregwar\Captcha\CaptchaBuilder;

?>

<!DOCTYPE html>
<html>

<head>
    <title>Royi</title>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type"> 
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/png" href="favicon.png">
	<link rel="stylesheet" type="text/css" href="css/main.css">

    <script src="//use.typekit.net/xwy1cvt.js"></script>
    <script>
	    try {
	        Typekit.load();
	    } catch (e) {}
    </script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/slides.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</head>

<body class="es">
    <nav>
        <a href="" id="logo"><img src="img/royi-logo.svg" alt="Royi Logo"></a>
        <a href="#services" class="menu-item" lang="es">Servicios</a>
        <a href="#services" class="menu-item" lang="en">Services</a>
        <a href="#alliances" class="menu-item" lang="es">Alianzas</a>
        <a href="#alliances" class="menu-item" lang="en">Alliances</a>
        <a href="#tools" class="menu-item" lang="es">Herramientas</a>
        <a href="#tools" class="menu-item" lang="en">Tools</a>
        <a href="#company" class="menu-item" lang="es">Equipo</a>
        <a href="#company" class="menu-item" lang="en">Company</a>
        <a href="#contact" class="menu-item" lang="es">Contacto</a>
        <a href="#contact" class="menu-item" lang="en">Contact</a>
        <span title="Spanish" class="language" data-lang="es" lang="en">Español</span>
        <span title="English" class="language" data-lang="en" lang="es">English</span>
    </nav>
    <section id="intro" class="color-bg">
        <p lang="es">Consultoría especializada en hidrocarburos y energia. Ofrecemos asistencia técnica, estrategias y tecnologías dentro de la industria petrolera internacional, en areas de exploración, producción y explotación de yacimientos así como entrenamiento especializado y certificaciones para su personal técnico y administrativo.</p>
        <p lang="en">We are a specialized consulting company for the areas of hydrocarbons and energy in general. We offer technical assistance to our clients in areas of exploration, production and operation of hydrocarbon deposits, as well as specialized training, associate degrees and certifications for technical and administrative personnel.</p>
        <button href="#contact" class="intro-contact" lang="es">Contactenos</button>
        <button href="#contact" class="intro-contact" lang="en">Contact Us</button>
    </section>
    <!-- SERVICIOS horizontal scrolling -->
    <section id="services">
        <div class="section-content">
	        <h2 lang="es">Servicios Especializados</h2>
	        <h2 lang="en">Services</h2>
	        <div class="icon iam show">
	        	
	        </div>
	        <div class="slides">
	            <div class="slide animate">
	                <h3 lang="es">Gerencia Integrada de Activos</h3>
	                <h3 lang="en">Integrated Asset Management</h3>
	                <ul>
	                    <li>Elaboración de escenarios de exploración, selección técnico-económica y diseño de la estrategia óptima para abordar los proyectos de inversión exploratoria así como el plan conceptual de su posible futuro desarrollo</li>
	                    <li>Elaboración de escenarios de desarrollo de campos, selección técnico-económica y diseño de la estrategia óptima para abordar los proyectos de inversión de explotación, así como el plan conceptual de su posible futuro desarrollo. </li>
	                    <li>Identificación de incertidumbres técnicas y económicas de mayor impacto y elaboración del plan de mitigación de riesgos consecuentes.</li>
	                    <li>Elaboración del plan integral de ejecución de la estrategia de exploración o desarrollo, según corresponda.</li>
	                    <li>Ambiente y seguridad industrial.</li>
	                    <li>Económico.</li>
	                    <li>Evaluación, jerarquización y pre-selección de escenarios.</li>
	                </ul>
	            </div>
                
	        </div>
            <div class="dots">
                <a href="0" class="active"></a>
                <a href="1"></a>
                <a href="2"></a>
                <a href="3"></a>
                <a href="3"></a>
            </div>
        </div>
        <span class="arrow" data-dir="prev"><img src="img/arrow_prev.svg" alt=""></span>
        <span class="arrow" data-dir="next"><img src="img/arrow_next.svg" alt=""></span>
    </section>
    <section id="alliances">
        <div class="section-content">
            <h2 lang="es">Alianzas</h2>
            <h2 lang="en">Alliances</h2>
            <p><img src="img/sst_logo.svg" alt=""></p>
            <p><img src="img/IRM_logo.svg" alt=""></p>
        </div>
    </section>
    <section id="tools" class="color-bg">
        <div class="section-content">
            <h2 lang="es">Herramientas</h2>
            <h2 lang="en">Tools</h2>
            <div>
                <h3>CASED<sup>R</sup></h3>
                <p>Caracterización Sedimentológica y Estratigráfica de Detalle Nº Registro: 03-2010-110511205100-01</p>
                <h3>GeoDIN<sup>R</sup></h3>
                <p>Sistema de Indicadores Dinámicos de Yacimiento Nº Registro: 03-2012-050710194400-01</p>
            </div>
            <div>
                <h3>SIDPRO<sup>R</sup></h3>
                <p>Pronóstico de Producción y Toma de Decisiones para Proyectos Nº Registro: 03-2011-020411560200-01</p>
                <h3>GeoTAC<sup>R</sup></h3>
                <p>Sistema de Indicadores Estáticos de Yacimientos. Nº Registro: 03-2012-05050710150400-01</p>
            </div>
            <div>
                <h3>IVVO<sup>R</sup></h3>
                <p>Identificación, Visualización y Valorización de Opciones. Nº Registro: 03-2012-041713023100-01</p>
            </div>
        </div>
    </section>
    <section id="company">
        <div class="section-content">
            <h2 lang="es">Equipo</h2>
            <h2 lang="en">Company</h2>
            <h3>MISSION</h3>
            <p>To provide strategies and technologies within the international oil industry, in areas of exploration, production and operation of hydrocarbons fields and deposits that can increase efficiency and streamline processes in customer decision making through our professionals that combine experience, talent and knowledge.</p>
            <h3>VISION</h3>
            <p>Being a fundamental reference of high quality and innovation services and products in the international oil industry.</p>
            <h3>VALUES</h3>
            <p>Customer service • Honestidad • Responsabilidad • Professional Competence • Teamwork</p>
        </div>
    </section>
    <section id="contact" class="color-bg">
        <div class="section-content">
            <h2 lang="es">Contacto</h2>
            <h2 lang="en">Contact</h2>
            <form action="php/form_mailer.php" method="POST">
                <p>
                    <label for="name" lang="es">Nombre</label>
                    <label for="name" lang="en">Name</label>
                    <input type="text" name="name" />
                </p>
                <p>
                    <label for="email">E-mail</label>
                    <input type="text" name="email" />
                </p>
                <p>
                    <label for="message" lang="es">Mensaje</label>
                    <label for="message" lang="en">Message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" value="enviar" lang="es">
                    <input type="submit" value="submit" lang="en">
                </p>
            </form>
            <div class="locations">
                <h3>Ciudad de Mexico</h3>
                <address>
                    Calle Kepler # 53, Col. Nueva Anzures Miguel Hidalgo México D.F.
                    <br> Tel: (52) 55459662
                </address>
                <address>
                    Av. ejército Nacional, Nº 418, Piso 8. Colonia Polanco, Quinta
                    <br> Sección, CP: 11560 Mexico, DF.
                    <br> Tel: (52) 11011777
                </address>
                <h3>Villahermosa</h3>
                <address>
                    Edificio Itaca 2000, Prol. Miguel Hidalgo No. 803 Col. José Narciso Rovirosa, Villahermosa, Tabasco C.P. 86050
                    <br> Tel: +52 993 3160287 / 993 3161959
                </address>
                <h3>Venezuela</h3>
                <address>
                    Torre Limina, Piso 10, Ofic. 10-C , Urb. Bello Monte Caracas Dtto. Capital 1040, Venezuela.
                    <br> Tel: +(58) 212 9512760 / +(58) 212 3161959
                    <br>
                </address>
            </div>
        </div>
    </section>
</body>

</html>
