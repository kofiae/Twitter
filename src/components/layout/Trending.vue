<template>
    <div class="md:block w-1/3 hidden h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative ">
        <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4" placeholder="Search Twitter" />
        <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
        <div class="w-full rounded-lg bg-lightest">
            <div class="flex items-center justify-between p-3">
                <p class="text-lg font-bold">Trends for You</p>
                <i class="fas fa-cog text-lg text-blue"></i>
            </div>
            <button v-for="trend in trending" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
                <div>
                    <p class="text-xs text-left leading-tight text-dark"> lol} </p>
                    <p class="font-semibold text-sm text-left leading-tight"> ppp </p>
                    <p class="text-left text-sm leading-tight text-dark"> {xxx </p>
                </div>
                <i class="fas fa-angle-down text-lg text-dark"></i>
            </button>
            <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
                Show More
            </button>
        </div>
    </div>
</template>

