import React from 'react'

const ImageShow = ({ imagesrc }) => {
    return (
        <img style={{ width: '300px', height: 'fit-content' }} alt='' src={imagesrc}></img>


    )

}




export default function ImageList({ data }) {

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '400px 400px 400px' }}>
            {
                data.map((image, i) => {
                    return (

                        <ImageShow key={image.id} imagesrc={image.urls.regular} />
                    )
                })
            }


        </div>

    )
}
