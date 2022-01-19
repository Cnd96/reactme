import React from 'react'
import {CFooter, CImg} from '@coreui/react'
import itechro from "../../assets/img/brand/itechro.png";

const TheFooter = () => {
    return (
        <CFooter fixed={false}>
            <div>
                {/*<span>&copy; Health Tracker</span>*/}
            </div>
            <div className="mfs-auto">
                {/*<span className="mr-1">Powered by</span>*/}
                {/*<a href="https://itechro.com/" target="_blank" rel="noopener noreferrer">*/}
                {/*    <CImg*/}
                {/*        style={{*/}
                {/*            'position' : 'relative',*/}
                {/*            'top' : '-2px'*/}
                {/*        }}*/}
                {/*        src={itechro}*/}
                {/*    />*/}
                {/*</a>*/}
            </div>
        </CFooter>
    )
};

export default React.memo(TheFooter)
