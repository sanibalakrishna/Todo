import React from 'react'

function Avatar() {
  return (
    <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-10">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-10">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-10">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-10 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
  )
}

export default Avatar