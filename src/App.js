import './App.css';
import { useState } from 'react';

const treeData = [
  { id: 1, parentId: null, label: "Главная", url: "/" },
  { id: 2, parentId: null, label: "Каталог", url: "/catalog" },
  { id: 3, parentId: 2, label: "Книги", url: "/catalog/books" },
  { id: 4, parentId: 2, label: "Музыка", url: "/catalog/music" },
  { id: 5, parentId: 3, label: "Фантастика", url: "/catalog/books/science-fiction" },
  { id: 6, parentId: 3, label: "Детективы", url: "/catalog/books/detectives" },
  { id: 7, parentId: 4, label: "Рок", url: "/catalog/music/rock" },
  { id: 8, parentId: 4, label: "Джаз", url: "/catalog/music/jazz" }
]

const Menu = () => {
  let child = useState(treeData)[0];
  let a = []
  const label = () => {
    for (let i = 0; i < child.length; i++) {
      for (let k = 0; k < child.length; k++) {
        if (child[i].parentId == child[k].id && child[i].parentId != null) {
          // setC(c => [...c, child[i].label])
          // console.log(child[i].parentId)
          a.push([child[i].parentId])
        }
      }
    }
  }
  label()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              treeData.map((i, v) => {
                // if (i.parentId != null) {
                  // console.log(i.parentId == a[v - 2])
                // }
                return (
                  i.parentId == null && i.id !== 0 ?
                    <li className="nav-item dropdown" key={v}>
                      <a className={`nav-link ${i.id !== 1 ? 'dropdown-toggle' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{i.label}</a>
                      {
                        i.id !== 1 ?
                          <ul className="dropdown-menu">
                            {
                              treeData.map((i, v) => {
                                // console.log(a)
                                return (
                                  a[i.parentId] !== i.parentId && i.parentId !== null ?
                                  // console.log(a.indexOf(a[i.parentId]), i.parentId)
                                  <li key={v}>
                                    <a className="dropdown-item dd" href="#">{i.label}</a>
                                    {
                                      // console.log(i.parentId, i.id)
                                      <ul className="dropdown-menu dropdown-submenu">
                                        <li>
                                          <a className="dropdown-item" href="#">Submenu item 1</a>
                                        </li>
                                      </ul>
                                    }
                                  </li>
                                  : null
                                )
                              })
                            }
                          </ul>
                        :null
                      }
                    </li>
                  : null
                )
              })
            }
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
