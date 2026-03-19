document.addEventListener("DOMContentLoaded",()=>{
const tabs=document.querySelectorAll(".tabs a");
const panels=document.querySelectorAll('.tabs [role="tabpanel"]');

function showTab(targetId) {
		tabs.forEach(tab => tab.classList.remove("active"));
		panels.forEach(panel => panel.classList.remove("show"));

        const activeTab = document.querySelector(`.tabs a[href="${targetId}"]`);
		const activePanel = document.querySelector(targetId);

        if (activeTab) {
			activeTab.classList.add("active");
		}

		if (activePanel) {
			activePanel.classList.add("show");
		}
    }

    tabs.forEach(tab => {
		tab.addEventListener("click", function(event) {
			event.preventDefault();
			const targetId = this.getAttribute("href");
			showTab(targetId);
		});
	});

	if (tabs.length > 0) {
		showTab(tabs[0].getAttribute("href"));
	}
});