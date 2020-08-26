import React, { Fragment } from 'react'
import { useObserver } from 'mobx-react-lite'
import './css/style.css'
export default function index() {
    return useObserver(() =>
        <Fragment>
            <div className="con_wrap con_wrap_4 wrap_show">
                <div className="motor_hook">
                    <div className="motor_wrap">
                        <div className="man">
                            <div className="head"></div>
                            <div className="body"></div>
                        </div>
                        <div className="motor">
                            <div className="wheel_front"></div>
                            <div className="wheel_back"></div>
                            <div className="motor_body"></div>
                            <div className="motor_handle"></div>
                            <div className="motor_pipe">
                                <i className="pipe"></i>
                                <i className="smoke smoke_1"></i>
                                <i className="smoke smoke_2"></i>
                            </div>
                        </div>
                    </div>
                    <div className="motor_shadow"></div>
                </div>

                <div className="tree_wrap">
                    <span className="tree_1"><i></i></span>
                    <span className="tree_2"><i></i></span>
                </div>
                <div className="wording_wrap">
                    <div className="wording wording_4"></div>
                </div>
                <div className="earth_bg"></div>
            </div>

        </Fragment>

    )
}
