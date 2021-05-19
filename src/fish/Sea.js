export class Sea {

    static timeStepMs = 10;

    static backColor = "rgba(120,120,255,0.6)";

    static sardinWidth = 2;
    static sardinLength = 7;
    static sharkColor = "black";
    static sharkWidth = 4;
    static sharkLength = 12;

    static D_SHARK_EAT = 12;
    static bloodColor = "red";
    static EATEN_SARDIN_NB = 0;


    constructor(c2, nb, w, h) {
        this.c2 = c2

        this.w = w;
        this.h = h;
        this.grid = new Grid(w, h, Sardin.D_OBS);
        this.shark = null;

        this.fish = []
        for (let i = 0; i < nb; i++)
            this.fish.push(new Sardin(this));
    }


    run() {
        const c2 = this.c2

        //observe
        for (let sa of this.fish)
            sa.observe();

        //move
        for (let sa of this.fish)
            sa.move();

        //shark eat fish
        const killed = sharkEat();

        //display

        //clear
        //c2.clearRect(0, 0, w, h);
        c2.setFillStyle(backColor);
        c2.fillRect(0, 0, w, h);

        //display blood spot
        c2.setFillStyle(bloodColor);
        for (let sa of killed) {
            c2.beginPath();
            c2.moveTo(sa.x, sa.y);
            c2.arc(sa.x, sa.y, 4, 0, 2 * Math.PI);
            c2.closePath();
            c2.fill();
        }

        //display sardins
        c2.setLineWidth(sardinWidth);
        for (let sa of fish)
            display(sa);

        //display halos
        //vision
        if (fishView.getValue()) {
            c2.setFillStyle(CssColor.make("rgba(255,255,255,0.3)"));
            c2.setLineWidth(1);
            for (let sa of fish) {
                c2.beginPath();
                c2.moveTo(sa.x, sa.y);
                c2.arc(sa.x, sa.y, Sardin.D_OBS, sa.va - Sardin.A_OBS * 0.5, sa.va + Sardin.A_OBS * 0.5);
                c2.closePath();
                c2.fill();
            }
            c2.setStrokeStyle(CssColor.make(255, 0, 255));
            c2.setLineWidth(0.5);
            for (let sa of fish) {
                for (let sa2 of sa.obs) {
                    c2.beginPath();
                    c2.moveTo(sa.x, sa.y);
                    c2.lineTo(sa2.x, sa2.y);
                    c2.closePath();
                    c2.stroke();
                }
            }
        }
        //collision
        if (fishHalo.getValue()) {
            c2.setLineWidth(1);
            c2.setStrokeStyle(CssColor.make(255, 0, 0));
            for (let sa of fish) {
                c2.beginPath();
                c2.arc(sa.x, sa.y, Sardin.D_COL * 0.5, 0, 2 * Math.PI);
                c2.closePath();
                c2.stroke();
            }
        }


        //display shark
        if (shark != null) {
            const x = shark[0];
            const y = shark[1];

            c2.setLineWidth(sharkWidth);
            c2.setStrokeStyle(sharkColor);

            const dx = sharkLength * Math.cos(shark[2]) * 0.5;
            const dy = sharkLength * Math.sin(shark[2]) * 0.5;

            c2.beginPath();
            c2.moveTo(x - dx, y - dy);
            c2.lineTo(x + dx, y + dy);
            c2.closePath();
            c2.stroke();
        }

    }

    sharkEat() {
        ArrayList < Sardin > killed = new ArrayList<Sardin>();
        if (shark == null) return killed;
        double x = shark[0], y = shark[1];
        ArrayList < Sardin > ss = grid.get(x - D_SHARK_EAT, y - D_SHARK_EAT, x + D_SHARK_EAT, y + D_SHARK_EAT);
        for (Sardin s: ss) {
            double d = Math.hypot((x - s.x), (y - s.y));
            if (d > D_SHARK_EAT) continue;
            killed.add(s);
            fish.remove(s);
            grid.remove(s, s.x, s.y);
        }
        EATEN_SARDIN_NB += killed.size();
        eatenFishNb.setText("Eaten fish: " + EATEN_SARDIN_NB);
        return killed;
    }

    private void display(Sardin sa) {
        int c = (int)(255 * Math.abs(sa.va) / Math.PI);
        c2.setStrokeStyle(CssColor.make(255, 255, c));
        double a = sardinLength / sa.v;
        double dx = a * sa.vx * 0.5;
        double dy = a * sa.vy * 0.5;

        c2.beginPath();
        c2.moveTo(sa.x - dx, sa.y - dy);
        c2.lineTo(sa.x + dx, sa.y + dy);
        c2.closePath();
        c2.stroke();
    }


}
