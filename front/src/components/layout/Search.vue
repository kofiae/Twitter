<script satup>

</script>


<template>
    <div class="searchbar"
         :class="{focused: isFocused}">
        <div class="searchbar-wrapper">
            <div class="searchbar-icon">
                <BaseIcon icon="search" />
            </div>
            <div class="searchbar-input">
                <input type="text"
                       placeholder="Search Twitter"
                       @focus="toggleFocus"
                       @blur="toggleFocus">
            </div>
        </div>
    </div>
</template>

<style>

</style>