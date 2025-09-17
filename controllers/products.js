import Product from "../models/products.js"

const getAllproducts =  async(req,res) => {
    // const Products = await Product.find(req.query)

    const { company, name, featured, sort, select  } = req.query
    const queryObject = {}

    if(company){
        queryObject.company = company
    }
    if(featured){
        queryObject.featured = featured === true? true:false

    }
    if(name){
        queryObject.name = { $regex:name, $options: "i"}
    } 
    
    let apiData = Product.find(queryObject)

    // Sorting
    if (sort) {
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix)
    }

    // Field selection
    if (select) {
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 3

    let skip = (page - 1) * limit

    apiData = apiData.skip(skip).limit(limit)

    console.log(queryObject)

    const Products = await apiData
    res.status(200).json({ Products, nHits:Products.length })
}

const getAllproductsTesting = async(req,res)=>{
    try {
        const Products = await Product.find(req.query).select("name company")

        res.status(200).json({Products})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export { getAllproducts,getAllproductsTesting }