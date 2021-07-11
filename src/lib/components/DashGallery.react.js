import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import memoize from "memoize-one";

export default class DashGallery extends Component {
    constructor(props){
        super(props);
        let sele = []
        if (this.props.selected == null) {
            this.props.images.forEach((img,index) => {
                if (img.hasOwnProperty("isSelected")) {
                    if(img.isSelected == true){
                        sele.push(index)
                    }
                }
            })
            this.props.setProps({selected: sele})
        }
        this.onSelectImage = this.onSelectImage.bind(this);
    }

    onSelectImage (index, image) {
            let images = this.props.images.slice();
            let img = images[index];
            if (img.hasOwnProperty("isSelected")) {
                img.isSelected = !img.isSelected;
            } else {
                img.isSelected = true;
            }
            let sele = [];
            images.forEach((img,index) => {
                if (img.hasOwnProperty("isSelected")) {
                    if (img.isSelected == true) {
                         sele.push(index)
                    }
                }
            })
            this.props.setProps({selected: sele});
            this.props.setProps({images: images})
    }
        
    parseOptions = memoize((options) => {

        const listOptions = {}
        if (options) {
        for (const [key, value] of Object.entries(options)) {
            listOptions[key] = value
        }
    }
        return listOptions
    });

    render() {
        const { id, images, options, style, selected } = this.props;

        const imageOptions = this.parseOptions(options);
        const gallery = [... images]

        if (selected != null) {
            gallery.forEach(img => {img.isSelected = false})
            selected.forEach(index => {
                if (gallery[index]) {
                    gallery[index].isSelected = true;
                }
            })
        } 
        return (
            <div id={id} style={style}>
            <Gallery images={gallery}
                     onSelectImage={this.onSelectImage}
                     lightBoxWidth={imageOptions.lightBoxWidth}
                     rowHeight={imageOptions.rowHeight}
                     margin={imageOptions.margin}
                     showImageCount={imageOptions.showImageCount}
                     maxRows={imageOptions.maxRows}
            />
            </div>
        );
    }
}

DashGallery.defaultProps = {
    selected: null,
    options: {lightBoxWidth: 1024, rowHeight: 100, margin: 2,
              showImageCount: true, maxRows: null }
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
     *  Gallery Options
     */
    options: PropTypes.object,

    /**
     * Selected Images
     */
    selected: PropTypes.array,

    /**
     * Style
     */
     style: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
