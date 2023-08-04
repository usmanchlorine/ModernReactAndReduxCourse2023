import React from 'react'

export default function Skeleton() {
    return (
        <div class="flex animate-pulse">
            <div class="ml-4 mt-2 w-full">
                <ul class="mt-5 space-y-3">
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                </ul>
            </div>
        </div>
    )
}
