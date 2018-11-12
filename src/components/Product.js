import React, { Component } from 'react';



class Product extends Component {
  render() {
    return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
            <img alt="hue" src="http://khamphahue.com.vn/Portals/0/Medias/Nam2017/T10/DiscoverHue_Dai-Noi-Kinh-thanh-Hue_Quan-the-di-tich-co-do-hue_Hue-Royal-Vestige.jpg"/>  
                <div className="caption">
                    <h3>HUE</h3>
                    <p>
                        que huong cua toi 
                    </p>
                </div>
                <button type="button" className="btn btn-danger">tim hieu</button>
        </div>
      </div>
    </div> 
    );
  }
}

export default Product;
