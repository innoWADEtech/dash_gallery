import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';
//import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashGallery extends Component {
    constructor(props){
        super(props);
        //this.ref = React.createRef();
        //ref = useRef(null)
        this.state = {... this.defaultProps,
            images: JSON.parse(JSON.stringify(this.props.images))
        }
        if (this.props.options) {
            for (const [key, value] of Object.entries(this.props.options)) {
                this.state[key] = value
            }
        }
       let sele = []

       this.props.images.forEach((img,index) => {
           if(img.hasOwnProperty("isSelected")){
               if(img.isSelected == true){
                    sele.push(index)
               }}})
        this.props.setProps({selected: sele})
        this.onSelectImage = this.onSelectImage.bind(this);
        //     //gallery: this.updateGallery(this.props.gallery)
        // };
    }

    onSelectImage (index, image) {
            // console.log(index)
            console.log(image)
            console.log(this.props.selected)
            // console.log(this.props.images)
            var images = this.state.images.slice();
            var img = images[index];
            // let selection = [... this.props.selected]
            // let position = this.props.selected.indexOf(index)
            
            // let selection = [... this.props.selected]
            // console.log(selection,position)
            // if (position == -1) {
            //     selection = selection.push(index)
            // } else {
            //     selection = selection.filter(item => item !== index)
            //     // selection.slice(position,1)
            // }
            // m rconsole.log(selection)
            if(img.hasOwnProperty("isSelected"))
                img.isSelected = !img.isSelected;
            else
                img.isSelected = true;
            this.setState({images: images})
            let sele = []
            this.state.images.forEach((img,index) => {
                if(img.hasOwnProperty("isSelected")){
                    if(img.isSelected == true){
                         sele.push(index)
                    }}})
            this.props.setProps({selected: sele})
            // this.props.setProps({selected: selection})
            // this.setState({
            //     images: images
            // });
        // this.props.setProps({images: images})
    }
    // updateGallery(gallery) {
        // console.log(this.ref)
        // this.ref.Gallery.enableImageSelection = gallery
    // }
    // componentDidMount() {
        // console.log(this.ref.current)
        // ref.Gallery.enableImageSelection = this.props.gallery
    // }

    componentDidUpdate(prevProps) {
        const {images, options} = this.props
        // if (prevProps.images != images) {
        //     this.setState({images: images})
        // }
        console.log('prev', prevProps.images)
        console.log('props', images)
        console.log('state', this.state.images)
        if (prevProps.images != images) {
            this.setState({images: images})
        }
        if (this.state.images != images) {
            this.props.setProps({images: JSON.parse(JSON.stringify(this.state.images))})
        }
        if (prevProps.options != options) {
            if (options) {
                this.setState(options)
                this.setState({images: this.state.images})
                
                // for (const [key, value] of Object.entries(options)) {
                //     this.state[key] = value
                   
                // }
            }
        }
    }
    render() {
        const {id, images, setProps, value} = this.props;

        return (
            <Gallery images={this.state.images}
                     onSelectImage={this.onSelectImage}
                     lightBoxWidth={this.state.lightBoxWidth}
                     rowHeight={this.state.rowHeight}
                     margin={this.state.margin}
                     showImageCount={this.state.showImageCount}
                     maxRows={this.state.maxRows}
            />
            // ref={this.ref}/>
            // <div id={id}>
            //     ExampleComponent: {label}&nbsp;
            //     <input
            //         value={value}
            //         onChange={
            //             /*
            //              * Send the new value to the parent component.
            //              * setProps is a prop that is automatically supplied
            //              * by dash's front-end ("dash-renderer").
            //              * In a Dash app, this will update the component's
            //              * props and send the data back to the Python Dash
            //              * app server if a callback uses the modified prop as
            //              * Input or State.
            //              */
            //             e => setProps({ value: e.target.value })
            //         }
            //     />
            // </div>
        );
    }
}

DashGallery.defaultProps = {
    selected: []
};

DashGallery.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Images to display
     */
    images: PropTypes.array,

    /**
     * Options
     */
    options: PropTypes.object,
    /**
     * Gallery Options
     */
    selected: PropTypes.array,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
