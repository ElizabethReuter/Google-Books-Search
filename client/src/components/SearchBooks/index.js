import React from "react";

function SearchBooks() {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Book Search</h3></label>
                <br></br>
                <input 
                    type="text"
                    name="searchBook"
                    placeholder="Search Books"
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary">
                Submit
            </button>
        </form>
    )
}



export default SearchBooks;