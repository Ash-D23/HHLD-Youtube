import React, { Suspense } from 'react'
import VideoMain from '../_components/VideoMain'

const page = () => {
  return (
    <Suspense>
        <VideoMain />
    </Suspense>
  )
}

export default page