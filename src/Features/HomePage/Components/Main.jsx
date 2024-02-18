import React from 'react'
import Hero from './Hero/Hero'
import SectionWrap from '../../../Shared/SectionWrap'
import Category from './Category/Category'
import HotDeal from './HotDeal/HotDeal'
import Products from './Products/Products'

const Main = () => {
    return (
        <div>

            <div className='flex flex-col justify-center'>
                <div>
                    <Hero />

                </div>
                <div className='mt-8  flex justify-center'>
                    <SectionWrap>
                        <div className='w-full flex flex-col gap-4'>

                            <Category />
                            <HotDeal />
                            <Products />
                        </div>


                    </SectionWrap>
                </div>
            </div>
        </div>
    )
}

export default Main