import h from 'hastscript'
import {breadcrumbs} from '../molecule/breadcrumbs.js'
import {detail} from '../component/keyword/detail.js'
import {page} from './page.js'

export function keyword(data, d) {
  return page(
    h('.row-l.column-l', h('h2', breadcrumbs('/explore/keyword/' + d))),
    detail(data, d)
  )
}
