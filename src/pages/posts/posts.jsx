import React from 'react';
import {useSelector} from "react-redux"
import {Button} from "antd"

function Posts(props) {
    const app = useSelector(state => state.postReducer)
    console.log(app)
    return (
        <div>
            <div className={'row'}>
                <div className={'col-md-6'}>
                    <h4>Posts</h4>
                </div>
                <div className={'col-md-6 text-end'}>
                    <Button type={'primary'}> + Add</Button>
                </div>
            </div>
        </div>
    );
}

export default Posts;