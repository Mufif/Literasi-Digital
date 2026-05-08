document.addEventListener("DOMContentLoaded", function() {
    const canvasElement = document.getElementById('literasiPieChart');
    
    if (canvasElement) {
        const ctx = canvasElement.getContext('2d');
        
        const chartData = {
            labels: [
                'Penyebaran Hoaks', 
                'Penipuan Online', 
                'Tautan Phishing', 
                'Cyberbullying'
            ],
            datasets: [{
                label: 'Persentase Kasus (%)',
                // UPDATE: Data disesuaikan dengan hasil form (total 100%)
                data: [40.6, 25, 21.9, 12.5], 
                backgroundColor: [
                    '#e74c3c', // Merah untuk Hoaks
                    '#f1c40f', // Kuning untuk Penipuan
                    '#e67e22', // Oranye untuk Phishing
                    '#3498db'  // Biru untuk Cyberbullying
                ],
                borderColor: 'transparent',
                borderWidth: 2
            }]
        };

        const config = {
            type: 'pie',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            font: { size: 13 }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Dampak Kurangnya Literasi Digital',
                        color: '#f1c40f',
                        font: { size: 16 }
                    }
                }
            }
        };

        new Chart(ctx, config);
    }
});
