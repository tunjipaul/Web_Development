//Library Membership System.

member = {
    name: "Leaves from the Vine",
    membershipType: "basic",
    borrowedBooks: [],


    borrowBook(book){
       this.borrowedBooks.push(book);
       return `Added Book: ${book}.`
},
    getBorrowedCount(){
        return `Number of Borrowed Books: ${this.borrowedBooks.length}`
    },
    getMembershipInfo(){
        return `Membership Type: ${this.membershipType}`
    }
}

console.log(member.borrowBook('The trials of brother jero'))
console.log(member.getBorrowedCount())
console.log(member.getMembershipInfo())

