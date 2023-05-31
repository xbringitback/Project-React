import './Head.css'

const Head = () => {
    return ( 
        <header>
            <section>
                <h2>Hello There</h2>
                <h1>We are Glint</h1>
                <div className='line'></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in quo temporibus odio vel nihil neque, quisquam illum, fuga eius minus sapiente rem dolore. Nemo fugit voluptas dolorum, voluptate nam odit nisi reiciendis facilis animi nesciunt laudantium, omnis nulla quam repellendus illum. Sunt dolorem animi natus nihil rem deserunt officia neque obcaecati beatae, tempora id, voluptatem commodi, quisquam aut qui!</p> 
            </section>
            <section>
                <article>
                    <p className='bigNumber'>127</p>
                    <p>Award Received</p>
                </article>
                <div className='lineBetween'>
                </div>
                <article>
                    <p className='bigNumber'>1505</p>
                    <p >Cups of Coffee</p>
                </article>
                <div className='lineBetween'>
                </div>
                <article>
                    <p className='bigNumber'>109</p>
                    <p>Projects Completed</p>
                </article>
                <div className='lineBetween'>
                </div>
                <article>
                    <p className='bigNumber'>102</p>
                    <p>Happy Clients</p>
                </article>
            </section>
        </header>

     );
}
 
export default Head;