import { Message as MessageModel } from '../../../../core/model';
import { Alignments } from '../../../../components/messaging';

interface UiMessage {
  alignment: Alignments;
}

export type UiMessageModel = UiMessage & MessageModel;
