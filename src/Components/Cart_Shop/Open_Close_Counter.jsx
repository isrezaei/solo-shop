import { slide as Menu } from 'react-burger-menu'
import {Shop_Panel} from "./Shop_Panel";
import {useState} from "react";
import {FiShoppingBag} from 'react-icons/fi'


export const Open_Close_Counter = () => {



    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            left : '.8rem',
            bottom : '0',
            width : '2.5rem',
            height : '2.5rem',
            padding : '.3rem',
            borderRadius: '30rem',
            background : '#2a59ef',
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
            background: 'rgba( 255, 255, 255, 0.6 )',

            backdropFilter: 'blur( 4px )',
            borderRadius: '10px',
            border: '1px solid rgba( 255, 255, 255, 0.18 )'

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
        <Menu onStateChange={()=> setOverFlow(value => !value)}
               customBurgerIcon={<p className='text-[1.5rem] flex justify-center items-center text-neutral-100'><FiShoppingBag/></p>} styles={styles}>
            <div className='w-full h-full !flex !justify-center !items-center'>
                <Shop_Panel/>
            </div>
        </Menu>
    )
}