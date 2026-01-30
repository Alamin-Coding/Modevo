import blogsOne from "../../assets/blog-image/blogs-1.jpeg"
import blogsTwo from "../../assets/blog-image/blogs-2.jpeg"
import blogsThree from "../../assets/blog-image/blogs-3.jpeg"


const Blogs = () => {
    return (
        <section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4">
    
    <div class="text-center mb-12">
      <h2 class="text-3xl font-semibold text-gray-900">
        Our Latest News & Blogs
      </h2>
      <p class="mt-3 text-gray-500 max-w-2xl mx-auto">
        Stay inspired with trend stories, expert styling tips, and fresh fashion insights — all curated just for you.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <div class="relative">
          <img src={blogsOne} className="h-[400px] w-[406px]" alt="" />
          <div class="absolute top-4 left-4 bg-white text-cent<div cler px-3 py-2 text-xs font-semibold">
            <p>28</p>
            <p class="uppercase">Jan</p>
          </div>
        </div>

        <div class="p-6">
          <span class="text-xs text-red-500 font-semibold uppercase">News</span>
          <h3 class="mt-2 text-lg font-semibold text-gray-900">
            Effortless Style Made Easy
          </h3>

          <p class="mt-3 text-gray-500 text-sm">
            Look stylish with minimal effort using versatile basics perfect for everyday wear.
          </p>

          <a href="#" class="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline">
            Read More
          </a>
        </div>
      </div>

      <div class="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <div class="relative">



          <img src={blogsTwo} className="h-[400px] w-[406px]" alt="" />

          <div class="absolute top-4 left-4 bg-white text-center px-3 py-2 text-xs font-semibold">
            <p>28</p>
            <p class="uppercase">Jan</p>
          </div>
        </div>

        <div class="p-6">
          <span class="text-xs text-red-500 font-semibold uppercase">News</span>
          <h3 class="mt-2 text-lg font-semibold text-gray-900">
            Oversized Denim Looks Are In
          </h3>

          <p class="mt-3 text-gray-500 text-sm">
            From jackets to shirts, oversized pieces bring comfort and modern edge.
          </p>

          <a href="#" class="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline">
            Read More
          </a>
        </div>
      </div>

      <div class="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <div class="relative">



          <img src={blogsThree} className="h-[400px] w-[406px]" alt="" />



          <div class="absolute top-4 left-4 bg-white text-center px-3 py-2 text-xs font-semibold">
            <p>28</p>
            <p class="uppercase">Jan</p>
          </div>
        </div>

        <div class="p-6">
          <span class="text-xs text-red-500 font-semibold uppercase">News</span>
          <h3 class="mt-2 text-lg font-semibold text-gray-900">
            The Power Of Mini Bags
          </h3>

          <p class="mt-3 text-gray-500 text-sm">
            Small in size, big in impact — mini bags complete your look.
          </p>

          <a href="#" class="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline">
            Read More
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


    )
}
export default Blogs;