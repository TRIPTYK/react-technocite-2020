import React from 'react'
import PropTypes from 'prop-types'
import FileListItem from './FileListItem'
const FileList = ({ files }) => (
  <div className="felx flex-col">
    <div className="my-2 overflow-x-auto sm:mx-6 lg:mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg-px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              {files.map((file) => (
                <FileListItem key={file.id} file={file} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

FileList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      update_at: PropTypes.string,
      latestCommit: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
  ),
}
export default FileList
