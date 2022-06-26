import React from 'react'
import { Skeleton } from 'primereact/skeleton';

const TodosSkeleton = () => {
  return (
    <>
    <table className="container-fluid mt-2 table table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td><Skeleton className="mb-2"></Skeleton></td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        
    </table>
    <Skeleton width="10rem" height="4rem"></Skeleton>
    <div><Skeleton className="mb-2" width='100%'></Skeleton></div>
    
    </>
  )
}

export default TodosSkeleton