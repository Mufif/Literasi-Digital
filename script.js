document.addEventListener("DOMContentLoaded", function() {
    // Cari elemen canvas
    const canvasElement = document.getElementById('literasiPieChart');
    
    // Hanya jalankan kode Chart.js JIKA elemen canvas ditemukan (berada di informasi.html)
    if (canvasElement) {
        const ctx = canvasElement.getContext('2d');
        
        const chartData = {
            labels: [
                'Korban Hoaks', 
                'Penipuan Transaksi Online', 
                'Pencurian Data Pribadi', 
                'Cyberbullying'
            ],
            datasets: [{
                label: 'Persentase Kasus (%)',
                data: [45, 25, 20, 10], // Data dari Google Form
                backgroundColor: [
                    '#e74c3c', 
                    '#f1c40f', 
                    '#3498db', 
                    '#9b59b6'  
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