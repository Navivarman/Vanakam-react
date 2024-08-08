import { render,screen } from "@testing-library/react"
import ResturantCart from "../ResturantCart"
import MOCK_URL from "../Mocks/mocksdata.json"
import "@testing-library/jest-dom"

test('should be render the ResturantCategory ', () => { 

   console.log(render(<ResturantCart resdata={MOCK_URL.resdata}/>)) 
    const name = screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument()

 })