import { slide as Menu } from 'react-burger-menu'
import {Shop_Panel} from "./Shop_Panel";
import {useState} from "react";


export const Open_Close_Counter = () => {



    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            left : '0',
            bottom : '0',
            width : '100%',
            height : '2`rem',
            margin : '0rem 0',
            background : '#3232c4',
            fontSize: '.8rem',
            padding : '.3rem',
            textAlign : 'center'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px',
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            top : '0',
            width : '100%',
            height: '100%',


        },
        bmMenu: {
            background: '#333333',
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    const [overFlow , setOverFlow] = useState(true)

    if (overFlow)
    {
        document.body.style.overflow = 'hidden'
    }
    if (!overFlow)
    {
        document.body.style.overflow = 'auto'
    }

    console.log(overFlow)




    return (
        <Menu  onStateChange={()=> setOverFlow(value => !value)} customBurgerIcon={<p className='text-neutral-50'>continue shop</p>} styles={ styles }>
            <div className='w-full h-full !flex !justify-center !items-center'>
                <Shop_Panel/>
            </div>
        </Menu>
    )
}