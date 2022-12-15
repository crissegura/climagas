import Carousel from 'react-bootstrap/Carousel';


const Inicio = ( ) => {

    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/vector-gratis/elegante-fondo-blanco-lineas-diagonales_1017-33199.jpg?w=2000"
                    alt="First slide" height={'300rem'}
                    />
                    <Carousel.Caption>
                    <h3 style={{color:'black', fontSize:'50px' }}> <b> CLIMATIZADORES </b></h3>
                    <p style={{color:'black', fontSize:'20px' }} >Piscinas residenciales y comerciales</p>
                    <p style={{color:'black', fontSize:'20px' }} >Opción gas, electricidad y solar</p>
                    <button style={{marginBottom:'20px' ,backgroundColor:'transparent', borderRadius:'10px', width:'5rem' }} >
                        Ver más
                    </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://png.pngtree.com/thumb_back/fw800/background/20210825/pngtree-scratched-grid-texture-beige-background-image_769839.jpg"
                    alt="First slide" height={'300rem'} 
                    />
                    <Carousel.Caption>
                    <h3 style={{color:'black', fontSize:'50px' }}> <b> SERVICIOS DE INSTALACIÓN </b></h3>
                    <p style={{color:'black', fontSize:'20px' }} >En casas, edificios, barrios cerrados <br />
                                                                    countries y locales.</p>
                    <button style={{marginBottom:'20px'  ,backgroundColor:'transparent', borderRadius:'10px', width:'5rem' }} >
                        Ver más
                    </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://w0.peakpx.com/wallpaper/295/456/HD-wallpaper-aqua-celeste-celeste-fondo-blue.jpg"
                    alt="First slide" height={'300rem'}
                    />
                    <Carousel.Caption>
                    <h3 style={{color:'black', fontSize:'50px' }}> <b> RADIADORES </b></h3>
                    <p style={{color:'black', fontSize:'20px' }} >Modernos, pequeños <br /> y eficientes</p>
                    <button style={{marginBottom:'20px' ,backgroundColor:'transparent', borderRadius:'10px', width:'5rem' }} >
                        Ver más
                    </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <Carousel slide={false} controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                    width={'210px'}
                    src="data:image/png;base64,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"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={'210px'}
                    src="https://i.pinimg.com/originals/ef/af/0f/efaf0f2abca48746bab37a3fa138995c.png"
                    alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={'210px'}
                    src="https://www.yamahacuernavaca.com.mx/wp-content/uploads/2019/11/Visa-MasterCard.png"
                    alt="tercer slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="contenedorDivsInicio">
                <div className='div1inicio'>
                    <h3 className='h3div1inicio'>RESIDENCIAL</h3>
                    <button className='btnDiv1inicio'>
                        conocer más ❱❱
                    </button>
                </div>
                <div className='div1inicio'>
                    <h3 className='h3div1inicio'>COMERCIAL</h3>
                    <button className='btnDiv1inicio'>
                        conocer más ❱❱
                    </button>
                </div>
                <div className='div1inicio'>
                    <h3 className='h3div1inicio'>INDUSTRIAL</h3>
                    <button className='btnDiv1inicio'>
                        conocer más ❱❱
                    </button>
                </div>
            </div>

            <div className='div1servicios'>
                <img src="https://d2f0ora2gkri0g.cloudfront.net/32/99/3299529f-1d4e-430b-83b7-3570a1a0628b.jpg" 
                width={'600rem'}
                alt="" />
                <div className="div2servicios">
                    <h2>Algunos de nuestros servicios:</h2>
                    <h4 className='py-2'>Asesoramiento personalizado</h4>
                    <h4 className='py-2'>Venta e instalación de equipos</h4>
                    <h4 className='py-2'>Post venta exclusiva para clientes</h4>
                    <h4 className='py-2'>Diseño de instalación en autocad</h4>
                    <h4 className='py-2'>Balance térmico</h4>
                </div>
            </div>

            <h4 style={{fontSize:'40px',marginBottom:'1rem'}} >Somos distribuidores oficiales de marcas lideres</h4>
            <div className='divMarcas'>
                <img src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png" width={'200rem'}  height={'200rem'}  />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" width={'200rem'}  height={'120rem'} />
                <img src="https://cdn.worldvectorlogo.com/logos/philco-1.svg" width={'200rem'}  height={'200rem'} />
                <img src="https://cdn.shopify.com/s/files/1/1669/6891/t/44/assets/logo.png?v=3975545635675651711640682866" width={'200rem'} height={'120rem'}  />
            </div>
        
        </>
    )

}

export default Inicio;