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
});