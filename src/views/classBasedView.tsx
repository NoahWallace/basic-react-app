import React, {PureComponent} from 'react';
import {CustomButton} from "../common/CustomButton";

interface ClassBasedViewProps {

}

interface ClassBasedViewState {
    index: number;
}

export class ClassBasedView extends PureComponent<ClassBasedViewProps, ClassBasedViewState> {

    state = {
        index: 0
    }
    incrementIndex = () => {
        this.setState({index: this.state.index + 1});
    }

    render() {
        const {children} = this.props;
        const {index} = this.state;
        return (
            <div>
                <h6>Class Based View</h6>
                <CustomButton onClick={this.incrementIndex} title={`Click me to increase index ${index}`}/>
                {children}
            </div>
        )
    }
}