import React from 'react'

const ReadTable = ({ post, handleEditPostForm, posts }) => {

  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <tr key={post.id}>
          <td >{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>
            <button
              type="button"
              className=" btn btn-primary ml-auto d-block mb-2"
              data-bs-toggle="modal"
              data-bs-target="#editModalForm"
              onClick={(e) => handleEditPostForm(e, post)}
            >
              Edit
            </button>
          </td>
        </tr>

      ))}

    </>
  )
}

export default ReadTable
