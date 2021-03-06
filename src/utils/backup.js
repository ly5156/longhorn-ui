import React from 'react'
import { Modal } from 'antd'
import { getPrefix } from './pathnamePrefix'

export function backupProgressModal(volumeName) {
  const prefix = getPrefix()
  const href = `${prefix}/backup?field=volumeName&keyword=${volumeName}`
  Modal.info({
    title: 'Backup In Progress',
    content: (
      <div>
        <p>This could take a while depending on the actual size of the volume and network bandwidth.</p>
        <p><a href={href}>Click here for completed backups.</a></p>
      </div>
    ),
  })
}
