import { HomeModule } from '../Home/home.module';
import { VotingModule } from '../voting/voting-desktop/voting.module';
import { ScoreModule } from '../Score/score.module';

export class DesktopRoutes {
    static routes = [
        {
            path: '',
            loadChildren: () => HomeModule
        },
        {
            path: 'voting',
            loadChildren: () => VotingModule
        },
        {
            path: 'scoreboard',
            loadChildren: () => ScoreModule
        }
    ];
}
