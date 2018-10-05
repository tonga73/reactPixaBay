import React from 'react';

const Image = (props) => {
    
    const  {largeImageURL, likes, previewURL, tags, views} = props.image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body row">
                    <p className="card-text col-6 d-block text-center">{likes} <i class="fas fa-heart text-danger"></i></p>
                    <p className="card-text col-6 d-block text-center">{views} <i class="fas fa-eye text-info"></i></p>

                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver imágen <i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Image;