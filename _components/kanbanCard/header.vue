<template>
	<span
		class="
			tw-text-gray-700
			tw-font-semibold
			tw-font-sans
			tw-tracking-wide
			tw-text-sm
			tw-w-full
		"
	>
		{{ data.title }}
	</span>
</template>
<script>


export default {
	props: {
		data: {
			type: Object,
			default: () => ({})
		},
	}
}
</script>