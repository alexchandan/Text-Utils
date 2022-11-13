import React from 'react'

export default function About(props) {
    return (
        <>

            <div className="container">
                <h1 className='text-center'>TextUtils</h1>
                <hr />
                <div>
                    <div className='row'>
                        <div className='col'>

                            <div className='leftside'>
                                <img src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=" alt="Building-image" />
                            </div>
                        </div>
                        <div className="col">
                            <div className='rightside'>
                                <h1 className='text-center'>2022</h1>
                                <p>The Textutils is a text manipulating web application. Where you can manipulate your text as per you requirement. You have to simply paste your text here and your text will be able to manipulate. Such as you can convert it to the UPPERCASE, lowercase and copy the text by just simply click the copy button. And your text will be ready to use.</p>
                                <p>This is just a demonstration of a project name "text-utils" it is made by <a href='https://github.com/alexchandan' target="_blank" className='text-primary text-decoration-none'>Alex Chandan</a> With the help of 'React.js'. The source code of this website is available <a href="https://github.com/alexchandan/Text-Utils" target="_blank" style={{ color: 'red' }}>here.</a></p>
                                <p>Thank you for using our application. If you like it then share this platform to your collegues and friends so they can also get benifits of our help.</p>
                                <p className="text-secondary text-center">!! Visit Again !!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
