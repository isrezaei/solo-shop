import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const HomeMobileSlider = () =>
{

    const slider = (
        <AutoplaySlider
            animation='fallAnimation'
            bullets={false}
            play={true}
            organicArrows={false}
            buttons={false}
            mobileTouch={false}
            cancelOnInteraction={false}
            interval={2000}
        >
            <div data-src='https://user-images.githubusercontent.com/77073972/167292683-188ee3ea-50eb-443d-b333-7f4c27b0efba.png' />
            <div data-src='https://user-images.githubusercontent.com/77073972/167294276-b5aacfe0-fa3b-45c1-b492-04a021b1de47.png' />
            <div data-src='https://user-images.githubusercontent.com/77073972/167292688-310156b1-11e9-4473-840a-5e0f06bfe82f.png' />
        </AutoplaySlider>
    );

    return (

        <div className='xs:w-full xs:block xs:rounded-3xl lg:hidden z-10'>
            {slider}
        </div>

    )
}