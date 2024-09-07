import React from 'react'

const ThreeDViewer = () => {
  return (
    <div>

      <div className="online_3d_viewer" style={{ backgroundColor: "black", width: "1000px", height: "500px" }}
        backgroundColor="41, 60, 67"
        model="models/playard_retro.obj, models/playard_retro.mtl"
        environmentmap="build/envmaps/fishermans_bastion/posx.jpg,build/envmaps/fishermans_bastion/negx.jpg,build/envmaps/fishermans_bastion/posy.jpg,build/envmaps/fishermans_bastion/negy.jpg,build/envmaps/fishermans_bastion/posz.jpg,build/envmaps/fishermans_bastion/negz.jpg">

      </div>


    </div>
  )
}

export default ThreeDViewer