import React from 'react';
import { Link } from 'react-router-dom';

const ListPosts = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">All Posts</h3>
          <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Tags</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test Post</td>
                <td>TEST POST: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                <td>test, post, content</td>
                <td><Link to={"/admin/dashboard/update/1"} className="btn btn-success"><i className="fa fa-pencil"></i></Link></td>
                <td><Link to={"/admin/dashboard/delete/1"} className="btn btn-danger"><i className="fa fa-trash-o"></i></Link></td>
              </tr>
              <tr>
                <td>Another Post</td>
                <td>ANOTHER TEST POST: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                <td>test, post, content, another</td>
                <td><Link to={"/admin/dashboard/update/2"} className="btn btn-success"><i className="fa fa-pencil"></i></Link></td>
                <td><Link to={"/admin/dashboard/delete/2"} className="btn btn-danger"><i className="fa fa-trash-o"></i></Link></td>
              </tr>
              <tr>
                <td>Will The Test Posts Ever End</td>
                <td>WILL THE TEST POST: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                <td>test, post, content, another, end</td>
                <td><Link to={"/admin/dashboard/update/3"} className="btn btn-success"><i className="fa fa-pencil"></i></Link></td>
                <td><Link to={"/admin/dashboard/delete/3"} className="btn btn-danger"><i className="fa fa-trash-o"></i></Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListPosts;
