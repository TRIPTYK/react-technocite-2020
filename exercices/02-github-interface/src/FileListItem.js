import React from 'react'
import PropTypes from 'prop-types'
import FileIcon from './FileIcon'
import FileName from './FileName'
import CommitMessage from './CommitMessage'
import Time from './Time'

const FileListItem = ({ file }) => (
  <tr className="bg-white border border-bottom border-gray-200">
    <td className="w-1/12 px-1 py-2 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-left">
      <FileIcon type={file.type} />
    </td>
    <td className="w-2/12 px-1 py-2 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-left">
      <FileName name={file.name} />
    </td>
    <td className="w-8/12 px-1 py-2 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-left">
      <CommitMessage message={file.latestCommit.message} />
    </td>
    <td className="w-1/12 px-1 py-2 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-left">
      <Time updateAt={file.update_at} />
    </td>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    update_at: PropTypes.string,
    latestCommit: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
}

export default FileListItem
