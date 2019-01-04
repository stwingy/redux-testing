import React from 'react'
import {mount} from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(()=>{
moxios.install()
moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status:200,
    response:[{name:"fetched #1"},{name:"fetched #2"}]
})
})
afterEach(()=>{
moxios.uninstall()
})

it('can fetch a list of comments and display them',(done)=>{
//render entire app
const wrapped =mount(
    <Root>
        <App />
    </Root>
)
//click the fetchcomments button
wrapped.find('.fetch-comments').simulate('click')
//check there is lots of comments PAUSE
// setTimeout(()=>{
//     wrapped.update()
//     expect(wrapped.find('li').length).toEqual(2)
//     done()
//     wrapped.unmount()
// },100)
moxios.wait(()=>{
    wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
        wrapped.unmount()
})

})